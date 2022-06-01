import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StarRating from "react-native-star-rating";

export default function BookCard(props) {
  const [rate, setRate] = useState(0);

  const onStarRatingPress = (rating) => {
    setRate(rating);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text>
          <Text style={styles.title}>Autor da Obra: </Text>
          <Text style={styles.text}>{props.author}</Text>
        </Text>
        <Text>
          <Text style={styles.title}>Titulo do Livro: </Text>
          <Text style={styles.text}>{props.title}</Text>
        </Text>
        <Text>
          <Text style={styles.title}>Url: </Text>
          <Text style={styles.text}> {props.url}</Text>
        </Text>
        <StarRating
          disabled={false}
          maxStars={5}
          selectedStar={(rate) => onStarRatingPress(rate)}
          rating={rate}
          starStyle={styles.star}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  star: {
    color: "#FFFFFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardContainer: {
    backgroundColor: "#c8232c",
    borderRadius: 4,
    marginTop: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: "#000000",
  },
  title: {
    fontWeight: "700",
    color: "#ffffff",
  },
});