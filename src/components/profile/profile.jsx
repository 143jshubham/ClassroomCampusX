import React, { Component } from "react";
import http from "../../services/httpService";
import { apiEndPoint } from "../../config.json";
import LoadingDots from "../common/loadingDots";
import ProfileSection from "./profileSection";
import Iframe from "./iframe";
import ProfileLinks from "./profileLinks";
import EditProfileForm from "./editProfileForm";

class Profile extends Component {
  state = {
    profileInfo: null,
    editForm: false,
  };

  handleEdit = () => {
    this.setState({
      editForm: true,
    });
  };
  handleClose = () => {
    this.setState({
      editForm: false,
    });
  };

  componentDidMount = async () => {
    const batchId = localStorage.getItem("batch_id");
    const userId = localStorage.getItem("user_id");
    const params = { data: { batch_id: batchId, user_id: userId } };
    const { data: profileData } = await http.post(
      apiEndPoint + "/profile",
      params
    );
    this.setState({ profileInfo: profileData });
  };

  componentDidUpdate = async () => {
    const batchId = localStorage.getItem("batch_id");
    const userId = localStorage.getItem("user_id");
    const params = { data: { batch_id: batchId, user_id: userId } };
    const { data: profileData } = await http.post(
      apiEndPoint + "/profile",
      params
    );
    this.setState({ profileInfo: profileData });
  };

  render() {
    if (this.state.profileInfo !== null) {
      const { youtube } = this.state.profileInfo;
      return (
        <div class="container-fluid userinfo mt-5 mb-5">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-12">
              <ProfileSection profileInfo={this.state.profileInfo} />
              <button
                type="button"
                className="btn badge-primary my-3"
                onClick={this.handleEdit}
                style={{ width: "100%" }}
              >
                Edit
              </button>
              <EditProfileForm
                show={this.state.editForm}
                handleClose={this.handleClose}
                profileInfo={this.state.profileInfo}
              />
            </div>
            <div class="col-lg-8 col-md-8 col-12">
              <div className="row profilevideo">
                <div className="col-md-10" style={{ marginTop: 50 }}>
                  <div className="card">
                    <div class="card-body align-items-center d-flex justify-content-center">
                      {youtube !== "" ? (
                        <Iframe url={youtube} />
                      ) : (
                        <h4 class="text-center">
                          <strong>You have not added a video resume yet</strong>
                        </h4>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <ProfileLinks profileInfo={this.state.profileInfo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="jumbotron d-flex align-items-center min-vh-100">
          <div className="container">
            <LoadingDots />
          </div>
        </div>
      );
    }
  }
}

export default Profile;
