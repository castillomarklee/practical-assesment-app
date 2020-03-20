import React from "react";
import faker from "faker";

const isCountryCodeExisting = countryCode => {
  if (!countryCode) {
    return faker.address.countryCode();
  }
  return countryCode;
};

const UserCard = ({ author, jobTitle, imageAvatar, content, countryCode }) => {
  const userAuthor = author || "No Author assigned";
  const userSentence = content || "No Description.";

  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="ui grid">
            <div className="two column row">
              <div className="column card-header-container">
                <div className="content">
                  <div className="header">{userAuthor}</div>
                  <div className="meta">{jobTitle}</div>
                </div>
              </div>
              <div className="column card-image-container">
                <img alt="avatar" style={{'width': '68px'}} src={imageAvatar} />
              </div>
            </div>
          </div>
          <div className="ui container">
            <div className="user-card-flex-container">
              <div>
                <img
                  src={`https://www.countryflags.io/${isCountryCodeExisting(
                    countryCode
                  )}/shiny/64.png`}
                  alt="Flag"
                />
              </div>
              <div>{userSentence}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
