import React from "react";
import PostForm from "./postForm";
import GyanForm from "./gyanForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faLink } from "@fortawesome/free-solid-svg-icons";

const CreateFeed = ({ categories, onRefresh }) => {
  return (
    <div className="feed">
      <div className="card text-center">
        <div className="col-md-12 col-12">
          <ul
            className="nav  nav-tabs card-header-tabs id='nav-tab' role='tablist' "
            style={{
              marginRight: `0px`,
              backgroundColor: "#eee",
              width: "104.5%",
            }}
          >
            <li className="nav-item" style={{ marginRight: -50 }}>
              <a
                className="nav-link active"
                id="nav-post-tab"
                data-toggle="tab"
                href="#nav-post"
                role="tab"
                aria-controls="nav-post"
                aria-selected="true"
                style={{ width: 100 }}
              >
                <span style={{ marginRight: 10 }}>
                  <FontAwesomeIcon icon={faPenSquare} />
                  {/* <i class="fa fa-pencil-square" aria-hidden="true"></i> */}
                </span>
                Post
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="nav-gyan-tab"
                data-toggle="tab"
                href="#nav-gyan"
                role="tab"
                aria-controls="nav-gyan"
                aria-selected="false"
                style={{ width: 100 }}
              >
                <span style={{ marginRight: 10 }}>
                  <FontAwesomeIcon icon={faLink} />
                </span>
                Link
              </a>
            </li>
          </ul>

          <div className="card-body p-0">
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active post"
                id="nav-post"
                role="tabpanel"
                aria-labelledby="nav-post-tab"
              >
                <PostForm onRefresh={onRefresh} />
              </div>
              <div
                class="tab-pane fade gyan"
                id="nav-gyan"
                role="tabpanel"
                aria-labelledby="nav-gyan-tab"
              >
                <GyanForm categories={categories} onRefresh={onRefresh} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFeed;
