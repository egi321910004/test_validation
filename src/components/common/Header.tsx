import React from "react";
import BackgroundCard from "../../assets/img/corner-6.png";

interface HeaderDefaultProps {
  title: string;
}

const Header: React.FC<HeaderDefaultProps> = ({ title }) => {
  return (
    <div className="card mb-3">
      <div
        className="bg-holder bg-card"
        style={{
          backgroundImage: `url(${BackgroundCard})`,
        }}
      ></div>
      <div className="card-body">
        <h4 className="text-primary mt-1">
          <span className="text-capitalize">{title}</span>
        </h4>
      </div>
    </div>
  );
};

export default Header;
