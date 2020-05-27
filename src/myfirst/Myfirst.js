import React from 'react';
import $ from 'jquery';
export class Myfirst extends React.Component {
	state = {
		arr: [],
		selectValue: 'Bubble Sort',
	};
	componentDidMount() {
		this.generatearr();
	}
	generatearr = () => {
		let arr = [];
		for (let i = 0; i < 10; i++) {
			arr.push(Math.floor(Math.random() * 600 + 3));
		}
		// console.log(arr);
		this.setState({ arr });
		// console.log(this.state);
	};
	handleChange = (e) => {
		this.setState({ selectValue: e.target.value });
	};
	sorting = () => {
		if (this.state.selectValue == 'Bubble Sort') {
			let transition = [[0, 1]];
			let temp = [...this.state.arr];
			for (let i = 1; i < this.state.arr.length; i++) {
				for (let j = 0; j < this.state.arr.length - i; j++) {
					if (temp[j] > temp[j + 1]) {
						transition.push([j, j + 1]);
						let mid = temp[j];
						temp[j] = temp[j + 1];
						temp[j + 1] = mid;
					}
				}
			}
			// console.log(transition);
			var delay = 0;

			let val = $('#barcont').children().toArray();
			for (let i = 1; i < transition.length; i++) {
				setTimeout(() => {
					let arr = this.state.arr;
					val[transition[i - 1][0]].classList.remove('barselected');
					val[transition[i - 1][1]].classList.remove('barselected');
					val[transition[i][0]].classList.add('barselected');
					val[transition[i][1]].classList.add('barselected');
					let t = arr[transition[i][0]];
					arr[transition[i][0]] = arr[transition[i][1]];
					arr[transition[i][1]] = t;
					this.setState({ arr });
				}, 100 * i);
			}
		}
		// console.log(this.state.arr);
	};
	render() {
		// console.log(this.state.selectValue);
		return (
			<React.Fragment>
				<header style={headerstyles}>
					<button style={btnStyles} onClick={this.generatearr}>
						generate Array
					</button>
					<select
						style={btnStyles}
						value={this.state.selectValue}
						onChange={this.handleChange}
					>
						<option>Merge Sort</option>
						<option defaultValue>Bubble Sort</option>
						<option>Insertion Sort</option>
						<option>Selection Sort</option>
						<option>Quick Sort</option>
					</select>
					<button style={btnStyles} onClick={this.sorting}>
						Sort
					</button>
				</header>
				<div id="barcont">
					{this.state.arr.map((value, idx) => (
						<div
							key={idx}
							className="bar"
							id={idx}
							style={{
								height: `${value}px`,
							}}
						></div>
					))}
				</div>
			</React.Fragment>
		);
	}
}
const headerstyles = {
	// backgroundColor: '#f6f6f6',
	display: 'flex',
	backgroundColor: '#ff0000',
};
const btnStyles = {
	display: 'inline-block',
	border: 'none',
	color: '#fff',
	background: '#555',
	padding: '10px 10px ',
	borderRadius: '2px',
	margin: '0px 5px',
	cursor: 'pointer',
	flex: '4',
};

export default Myfirst;
