import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './DetailPage.css';

class DetailPage extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="DetailPage">
           <div id="videoContainer">
          <video id="v-control" autoplay="true" loop="true" tabindex="0">
            <source
              type="video/mp4"
              src="https://media.giphy.com/media/Z69UDgjfRMjsY/giphy.mp4"
              alt=" MyVideo"
            />
          </video>
        </div>
      </div>
    )
  }
}
DetailPage.propTypes = {
}

export default DetailPage;