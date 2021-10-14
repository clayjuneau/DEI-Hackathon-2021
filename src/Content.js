import { Divider } from "@valassis/icon-components";
import React from "react";
import './Content.css'

class Content extends React.Component {
    render() {
        return (
					// What we will pass:
					// Left header
					// image link
					// conclusion subject line
					// conclusion line 1
					// recommendations subject line
					// recommendations line 1

					<table>
						<tr>
							<td> <img class="image" src={this.props.imageLink}></img> </td>
							<td> 
								<p class="header">More Information</p>
								<p class="subhead">{this.props.subhead}</p>
								<div class="bodyArea">
									<p class="bodyText">{this.props.body}</p>
								</div>
								
							</td>
						</tr>
						<tr>
							
							<td> <p class="recSubject">{this.props.recSubject}</p> </td>
						</tr>
					</table>

        );
    }
}

export default Content;