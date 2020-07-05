import React, { Component } from 'react'
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class spinner extends Component {

    render() {
        return (
            <div style={{marginTop:"20%"}}>
                <BounceLoader
                    css={override}
                    size={40}
                    color={"#123abc"}
                    loading={true}
                />
                <p style={{textAlign:"center"}}>Loading</p>
            </div>
        )
    }
}
export default spinner
