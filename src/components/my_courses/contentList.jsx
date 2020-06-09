import React from "react";
import { Link } from "react-router-dom";

const ContentList = ({ content, onContentClick }) => {
  const renderContent = (contentItem) => {
    if (contentItem[0] == "Video") {
      return (
        <tr>
          <td
            onClick={() => {
              onContentClick(contentItem);
            }}
            style={{ cursor: "pointer" }}
          >
            {contentItem[1]}
          </td>
        </tr>
      );
    } else if (contentItem[0] === "Link") {
      return (
        <tr>
          <td>
            <a href={contentItem[2]} target="_blank">
              <strong>{contentItem[1]}</strong>
            </a>
          </td>
        </tr>
      );
    } else {
      if (contentItem.length == 4) {
        return (
          <tr>
            <td>
              <Link to={`/task/${contentItem[3]}`}>
                <strong>{contentItem[1]}</strong>
              </Link>
            </td>
          </tr>
        );
      } else {
        return (
          <tr>
            <td>
              <a href={contentItem[2]} target="_blank">
                <strong>{contentItem[1]}</strong>
              </a>
            </td>
          </tr>
        );
      }
    }
  };
  return (
    <div className="side-lecture">
      <div className="card">
        <div
          className="card-header"
          style={{ fontSize: 20, color: `#fff`, backgroundColor: `#009b72` }}
        >
          Topics
        </div>
        <div
          className="card-body p-0"
          style={{ height: 450, overflowY: "scroll" }}
        >
          <table className="table table-bordered table-striped my-0">
            <tbody>
              {content.map((contentItem) => {
                return renderContent(contentItem);
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContentList;
