import React from "react";
import './style.min.css';
import axios from "axios";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, message2, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    if (link && !pictureLinkRegex.test(link)) {
      const handleRequest = async () => {
        const instaLink = "https://www.instagram.com/";
        const instaQuery = "/?__a=1";
        try {
          const response = await axios.get(instaLink + link + instaQuery);
          setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
        } catch (error) {
          setShowPic(false);
          console.error(error.message);
        }
      };
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  return (
    <div
      id="aboutme"
      className="jumbotron jumbotron-fluid m-0"
      style={{backgroundColor: "#F6F1EC" }}
    >
      <div className="container container-fluid">
        <div className="row">
          <div className="col-5 d-none d-lg-block align-self-center">
            {showPic && (
              <img
                className="border border-secondary rounded-circle"
                src={profilePicUrl}
                alt="profilepicture"
                width={imgSize}
                height={imgSize}
              />
            )}
          </div>

          <div className={`col-lg-${showPic ? "7" : "12"}`}>
            <h2
              className="display-4 mb-5 text-center"
              style={{ color: "#5E5946" }}
            >
              {heading}
            </h2>
            <p className="lead text-center increase-weight" style={{ color: "#5E5946" }}>
              {message}
            </p>
            <p className="lead text-center increase-weight" style={{ color: "#5E5946" }}>
              {message2}
            </p>
            <br></br>
              
            {resume && (
              <p className="lead text-center">
                <a
                className="btn btn-outline-dark btn-lg mr-5"
                // style={{ color: "#5E5946", borderColor: "#5E5946" }}
                href="https://blog.raythx.com"
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Blog"
              >
                My Blog
              </a>
                <a
                  className="btn btn-outline-dark btn-lg"
                  // style={{ color: "#5E5946", borderColor: "#5E5946" }}
                  href={resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
