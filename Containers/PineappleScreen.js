import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

export default class PineappleScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/pineapple-ocean.jpg')} style={styles.image}>
            </Image>
          </View>
          <View style={styles.tabNavigationContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>This is a Pineapple Screen.</Text>
            </View>
            <View style={styles.navContainer}></View>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.text}>
                Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                {"\n"}{"\n"}

Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
                {"\n"}{"\n"}

Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
                {"\n"}{"\n"}

Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.
                {"\n"}{"\n"}

Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.
              </Text>
            </ScrollView>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
  },
  tabNavigationContainer: {
    margin: 5,
    padding: 5,
    flex: 2,
    backgroundColor: '#fff',
  },
    titleContainer: {
    height: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'black',
  },
  navContainer: {
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 1.0
  },
  scrollView: {
    margin: 10,
    padding: 1,
  },
  text: {
    fontSize: 15,
    color: 'black',
    textAlign: 'left',
    lineHeight: 20,

  },
})
