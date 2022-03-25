import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhoto } from '../store/actions';
import PhotoCard from '../components/PhotoCard';
import Loader from '../components/Loader';

const height = Dimensions.get('window').height

const ImageList = () => {
  const [photoList, setPhotoList] = useState([])
  const { photo , loading } = useSelector(state => state)

  const dispatch = useDispatch()

  const renderPhoto = (photoData) => {
    const { urls, user, id } = photoData.item
    return <PhotoCard
            keyExtractor={id}
            user={user}
            source={urls.small}
            author={user.username}
          />
  }

  useEffect(() => {
    dispatch(fetchPhoto())
    setPhotoList(photo.photo)
  }, [])

  useEffect(() => {
    setPhotoList(photo.photo)
  }, [photo])
  return(
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <Text style={styles.titleText}>Gallery</Text>
      </View>
      { loading.loading ? <Loader/>
        : <FlatList
          style={styles.list}
          data={photoList}
          renderItem={renderPhoto}
          keyExtractor={item => item.id}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },  
  titleBlock: {
    height: height / 10,
    backgroundColor: '#e8eaf6',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  titleText: {
    fontSize: 50,
    color: '#5f6278'
  },
  list: {
    backgroundColor: 'rgba(159, 207, 195, 0.5)'
  },
  loadingContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  } 
})

export default ImageList