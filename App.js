import { View, Text } from 'react-native'
import React, {useState} from 'react'
//i want tu read data firebase realtime database
import database from '@react-native-firebase/database'


const App = () => {
  const [data, setData] = useState([])
  console.log(data);
  React.useEffect(() => {
    //get data
    database()
      .ref('/FirebasePWI')
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
        setData(snapshot.val())
      }
    )

  }, [])
  return (
    <View>
      <Text>temperatur : {data.TDS}</Text>
      <Text>temperatur : {data.Temprature}</Text>
      <Text>temperatur : {data.ketinggian_air}</Text>
      <Text>temperatur : {data.pH}</Text>
    </View>
  )
}

export default App