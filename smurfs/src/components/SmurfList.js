import React, { useEffect } from "react";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

const SmurfList = props => {
  useEffect(() => {
    props.fetchPosts();

    // console.log(`smurf list`, props);
  }, []);

  return (
    <div className="list-container">
      <div className="list">
        {props.smurfs.map(smurf => {
          return <SmurfCard key={smurf.id} smurf={smurf} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(mapStateToProps, { fetchPosts })(SmurfList);
