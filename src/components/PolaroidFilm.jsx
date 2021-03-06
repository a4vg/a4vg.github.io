import React, { Component } from "react";
import { ReactComponent as TapeSvg } from "../assets/images/icons/tape.svg";

class PolaroidFilm extends Component {
  replaceEndLines = (text) => {
    return text
      .split("\\n")
      .reduce(
        (accum, item, i) =>
          accum.concat(
            <React.Fragment key={i}>{item}</React.Fragment>,
            <br key={`br${i}`} />
          ),
        []
      );
  };

  addHref = (href, content) => {
    return href? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : content;
  };

  render() {
    return (
      <div className="polaroid-film">
      <div className="polaroid-film__content" style={this.props.withTape && {marginTop: "2em"}}>
        { this.props.withTape && 
        <div className="polaroid-film__tape-wrapper">
          <TapeSvg />
        </div>
        }
        <img
          className="polaroid-film__image"
          width={this.props.width}
          height={this.props.height}
          src={this.props.src}
          alt=""
        />
        {this.props.caption && (
          <p className="polaroid-film__caption">
            {this.addHref(
              this.props.captionHref,
              this.replaceEndLines(this.props.caption)
            )}
          </p>
        )}
      </div>
      </div>
    );
  }
}

export default PolaroidFilm;
