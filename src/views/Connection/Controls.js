import React, { Component } from "react";
import { store } from "react-notifications-component";
import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import {
  Nav,
  NavItem,
  NavLink,
  Progress,
  TabContent,
  TabPane,
  ListGroup,
  ListGroupItem,
  Spinner,
} from "reactstrap";
import classNames from "classnames";
import { AppSwitch } from "@coreui/react";
import MessageView from "../../views/MessageList/index";
import {
  Jumbotron,
  Button,
  ButtonGroup,
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
  Collapse,
  Fade,
} from "reactstrap";
//import Peer from "../../dependencies/peerjs/index.d.ts";
import Peer from "peerjs";
import axios from "axios";
import "./Controls.css";

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName: this.props.roomName,
      //Use Sets instead of Arrays to prevent duplicates.
      remotePeers: new Array(),
      remotePeersID: new Array(),
      calls: new Array(),
      connectedPeers: new Array(),
      opinfo: "",
      friendtkn: "",
    };
    this.startScreenShare = this.startScreenShare.bind(this);
    this.startConnection = this.startConnection.bind(this);
    this.sendCallEndedSignal = this.sendCallEndedSignal.bind(this);
    axios
      .post("http://localhost:5000/api/room/getActive", {
        roomName: this.props.roomName,
      })
      .then((res) => {
        console.log("EHREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", res);
        if (!res.data.active.length) return;
        this.setState({ active: res.data.active });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.roomName != prevProps.roomName) {
      axios
        .post("http://localhost:5000/api/room/getActive", {
          roomName: this.props.roomName,
        })
        .then((res) => {
          if (!res.data.active.length || res.data.active == this.state.active)
            return;
          this.setState({
            roomName: this.props.roomName,
            active: res.data.active,
          });
        });
    }
  }

  createNotif = (title, msg, type) => {
    store.addNotification({
      title: title,
      message: msg,
      type: type,
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 3000,
        pauseOnHover: true,
      },
    });
  };

  switchContext = (e) => {
    let context = document.getElementById("context");
    context.srcObject = e.target.srcObject;
    context.play();
  };

  async startScreenShare(type, next) {
    const self = this;
    //console.log(this.state.roomName);
    var tkn;

    //Get a new peerId.
    var peer = new Peer({
      config: {
        iceServers: [
          { urls: "stun:stun.l.google.com:19302" },
          {
            url: "turn:numb.viagenie.ca",
            credential: "HWeF3pu@u2RfeYD",
            username: "veddandekar6@gmail.com",
          },
        ],
      } /* Sample servers, please use appropriate ones */,
    });

    //Upload the PeerID to the server, get an old ID, if exists to be used
    await peer.on("open", function (id) {
      tkn = id;
      console.log(tkn);
      next();
      const reqData = {
        roomName: self.state.roomName,
        tkn: tkn,
        username: localStorage.getItem("uname"),
      };
      axios
        .post("http://localhost:5000/api/room/goonline", reqData)
        .then((res) => {
          //console.log(res);
          if (res.data.connected == 1) {
            self.getMyMediaStream(self, type).then((media) => {
              self.waitForConnections(self, peer);
            });
          } else if (res.data.connected > 1) {
            self.getMyMediaStream(self, type).then((media) => {
              self.waitForConnections(self, peer);

              //Array of users online with their peerIDs to make requests to all.
              let onlineArray = res.data.online;
              console.log(media);
              onlineArray.forEach((val, index) => {
                if (val.username == localStorage.getItem("uname")) {
                  //Display my screen without creating a connection.
                  return;
                }
                console.log("Connecting to " + onlineArray[index].tkn);
                self.startConnection(self, onlineArray[index].tkn, peer);
              });
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  // Experimental : To be tested thoroughly
  // Function to get the media stream for the user and store it in state so that it
  // can be used multiple times without requiring permission.
  // Maybe the same function can be used to toggle between stream and video.
  async getMyMediaStream(self, type) {
    if (type == "screen") {
      //TODO: Add try catch to handle case when user denies access

      await navigator.mediaDevices
        .getDisplayMedia({
          video: { width: 1024, height: 576 },
          audio: true,
        })
        .then((media) => {
          self.setState({
            myMediaStreamObj: media,
          });
          self.createVideoElement(self, this.state.myMediaStreamObj);
          return media;
        });
    } else if (type == "video") {
      //TODO: Add try catch to handle case when user denies access

      await navigator.mediaDevices
        .getUserMedia({
          video: { width: 1024, height: 576 },
          audio: true,
        })
        .then((media) => {
          self.setState({
            myMediaStreamObj: media,
          });
          self.createVideoElement(self, this.state.myMediaStreamObj);
          return media;
        });
    }
  }

  // Asynchronous function to start a connection to peer with ID friendtkn.
  // The media stream to be used is chosen from this.state.myMediaStreamObj
  async startConnection(self, friendtkn, peer) {
    console.log(friendtkn);
    console.log("starting connection with " + friendtkn);
    //console.log(friendtkn);
    var mediaa = self.state.myMediaStreamObj;
    self.sendMediaStream(self, peer, mediaa, friendtkn, false);
  }

  // Function to wait for incoming requests onf 'peer' and handle them.
  waitForConnections(self, peer) {
    console.log("Waiting for connections....");
    var mediaa = self.state.myMediaStreamObj;
    peer.on("call", function (call) {
      self.sendMediaStream(self, peer, mediaa, null, true, call);
    });
  }

  // Function to send the mediaStream passed through media. if isAnswer is true,
  // the mediaStream is sent as an answer to the 'call' object, otherwise a new call is created.
  sendMediaStream(self, peer, media, friendtkn, isAnswer, call) {
    var friendtkn;
    if (isAnswer) {
      friendtkn = call.peer;
      console.log("Connected to " + friendtkn);
      this.createNotif("Member joined", `${friendtkn} joined the call`, "info");
    }
    console.log(media);
    var tracks = media.getTracks();
    var track = tracks[0];
    var thiscall = call;

    // triggered when our stream being sent ends.
    track.addEventListener("ended", () => {
      console.log("My stream ended. Please show this");
      //self.startConnection(friendtkn, peer, self);
    });

    //Can't figure out the exact conditions which cause this event to be handled,
    //but this handler maybe useful, if we are enabling and disabling streams.
    track.addEventListener("mute", () => {
      console.log("My stream muted. Please show this");
    });

    if (isAnswer) {
      thiscall.answer(media);
    } else {
      thiscall = peer.call(friendtkn, media);
    }
    self.setState(
      {
        //call: peer.call(friendtkn, media),//to be updated appropriately
        calls: [...self.state.calls, thiscall],
      },
      () => {
        self.addHandlersToCall(self, thiscall, friendtkn, peer, isAnswer);
      }
    );
  }

  // Add Event handlers to the thiscall call - error, stream used as of now.
  addHandlersToCall(self, thiscall, friendtkn, peer, isAnswer) {
    // Triggered when an error is observed in connection.
    thiscall.on("error", (err) => {
      // TODO: Add condition to close the connection.
      console.log("Connection failed for " + friendtkn);
      console.log(friendtkn);
      console.log(err);
      thiscall.close();

      // If an error is observed, we automatically send another request to start connection,
      // to provide reliability. Since, we dont want both the receiver and sender of the stream
      // to send new calls, only the receiver initiates a new connection.
      if (!isAnswer) {
        console.log(friendtkn);
        self.startConnection(self, friendtkn, peer);
      }
    });

    // Triggered when receiving a stream from peer.
    thiscall.on("stream", function (stream) {
      console.log("stream received from" + thiscall.peer);
      self.createStream(self, stream, friendtkn);
    });
  }

  // Add event handlers to the incoming stream and do some other processing,
  // before being sent to the video object to be displayed on screen.
  createStream(self, stream, friendtkn) {
    var tracks = stream.getTracks();
    var track = tracks[0];

    //Experimental event handler - to be removed.
    stream.onremovetrack = function (evt) {
      console.log("Track removed");
      console.log(evt);
    };

    console.log(track.remote);

    // These handlers being added are to the incoming stream we are receiving, while
    // the handlers added before were to the stream which we were sending.

    // triggered when the remote stream being received ends due to connection error
    track.addEventListener("ended", () => {
      console.log("Receiving stream ended. Please show this");
    });

    //Can't figure out the exact conditions which cause this event to be handled,
    //but this handler maybe useful, if we are enabling and disabling streams.
    track.addEventListener("mute", () => {
      console.log("muted. Please show this");
    });

    console.log(stream.getTracks());

    self.createVideoElement(self, stream);

    //self.videoRef.current.srcObject = stream;
  }

  // Creates a new video element to show the stream passed to it.
  createVideoElement(self, stream) {
    let video = document.createElement("video");
    video.width = "200";
    video.height = "350";
    video.srcObject = stream;
    video.autoplay = true;
    video.onclick = self.switchContext;
    document.getElementById("videos").appendChild(video);
  }

  sendCallEndedSignal(next) {
    const reqData = {
      username: localStorage.getItem("uname"),
      roomName: this.state.roomName,
    };
    axios
      .post("http://localhost:5000/api/room/exitstream", reqData)
      .then((res) => {
        console.log(res.data);
        next();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    // eslint-disable-next-line
    console.log(this.state.active);
    const self = this;
    return (
      <Container>
        <br />
        <br />
        <Row className="justify-content-center text-center">
          <AwesomeButtonProgress
            type="primary"
            size="medium"
            action={(element, next) => {
              this.startScreenShare("video", next);
            }}
          >
            <i class="icon-user icons"></i>
            <span> Video</span>
          </AwesomeButtonProgress>
          <AwesomeButtonProgress
            type="primary"
            size="medium"
            action={(element, next) => this.startScreenShare("screen", next)}
          >
            <i class="icon-screen-desktop icons"></i>
            <span> Screen</span>
          </AwesomeButtonProgress>
          <AwesomeButtonProgress
            type="primary"
            size="medium"
            action={(element, next) => {
              this.sendCallEndedSignal(next);
            }}
          >
            <i class="icon-call-end icons"></i>
            <span> End Call</span>
          </AwesomeButtonProgress>
        </Row>
        <br />
        <ListGroup flush>
          {this.state.active
            ? this.state.active.map((user) => {
                return (
                  <ListGroupItem key={Math.random()}>
                    <Spinner type="grow" size="sm" variant="success" />
                    {user.username}
                  </ListGroupItem>
                );
              })
            : " "}
        </ListGroup>
      </Container>
    );
  }
}

export default Controls;
