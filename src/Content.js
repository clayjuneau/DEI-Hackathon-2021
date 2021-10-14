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
							<th>Metric 1</th>
							<th>Reccomendations</th>
						</tr>
						<tr>
							<td> <img class="image" src={this.props.imageLink}></img> </td>
							<td> <p>some text</p> </td>
						</tr>
					</table>

        );
    }
}

export default Content;