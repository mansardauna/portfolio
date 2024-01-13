import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaYoutubeSquare,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <div className="d-flex ">
        {socialprofils.twitter && (
          <span>
            <a href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </span>
        )}
        {socialprofils.github && (
          <span>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </span>
        )}
        {socialprofils.facebook && (
          <span>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </span>
        )}
        {socialprofils.linkedin && (
          <span>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </span>
        )}
        {socialprofils.youtube && (
          <span>
            <a href={socialprofils.youtube}>
              <FaYoutubeSquare/>
            </a>
          </span>
        )}
        {socialprofils.twitch && (
          <span>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </span>
        )}
      </div>
    </div>
  );
};
