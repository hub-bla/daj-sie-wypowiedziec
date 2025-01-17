import react, { useState } from "react"

import { StyleSheet, Text, View, Button, ScrollView, Image } from "react-native"

import { AntDesign } from "@expo/vector-icons"

// import { data } from "./words"
import { data } from "./test"

export default function Card({ text, type, color = "#FB5607", size = 60 }) {
	const [image, setImage] = useState(
		data.filter((ob) => {
			if (ob.pl == text) {
				return true
			}
		})
	)
	const width = size
	const height = size * 1.4
	const fontSize = size / 5
	const footerHeight = size / 3
	const photoHeight= size * 1.4 * 2  / 3 
	const photoWidth= size * 0.8 


	let bColor;

	if (type === "rzeczownik") {
		bColor = "#3A86FF"
	} else if (type === "czasownik") {
		bColor = "#8338EC"
	} else if (type === "przymiotnik") {
		bColor = "#FB5607"
	} else if (type === "wyrażenie") {
		bColor = "#FF006E"
	}

	// console.log(data.filter((item) => item.pl === text)[0].link)

	// const link = data.filter((item) => item.pl === text)[0].link

	return (
		<View
			style={[
				styles.card,
				{
					width: width,
					minHeight: height,
					background: `url("../assets/img/${text}.png`,
				},
			]}>
        <View style={[styles.imgContener, {height: (height*0.8)}]}>

			<Image style={[styles.photo, {width: photoWidth, height: photoHeight}]} source={image[0]?.link} />
        </View>
			<View
				style={[styles.cardFooter, { width: "100%", minHeight: footerHeight }]}>
				<Text
					adjustsFontSizeToFit={true}
					numberOfLines={1}
					style={[styles.cardText, { fontSize: fontSize }]}>
					{text}
				</Text>
			</View>
			<View style={[styles.cardBorder, { borderColor: bColor }]}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		marginRight: 10,
		backgroundColor: "#EAF4F4",
		borderRadius: 12,
		marginBottom: 10,
		background: "url(",
	},
	cardFooter: {
		position: "absolute",
		bottom: 0,
		alignItems: "center",
		justifyContent: "center",
		paddingBottom: 3,
		backgroundColor: "#CCE3DE",
		borderBottomLeftRadius: 12,
		borderBottomRightRadius: 12,
	},
	cardText: {
		color: "#6B9080",
		maxWidth: "100%",
		fontFamily: "Itim",
		paddingLeft: 5,
		paddingRight: 5,
	},
	cardBorder: {
		borderStyle: "solid",
		borderWidth: 3,
		borderRadius: 12,
		marginRight: 15,
		backgroundColor: "transparent",
		position: "absolute",
		width: "100%",
		height: "100%",
	},
  imgContener: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
})