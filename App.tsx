import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './component/Flatcards'
import Elevaedcard from './component/Elevaedcard'
import Fancycards from './component/Fancycards'
import Fancycards2 from './component/Fancycards2'
import Actioncard from './component/Actioncard'
import Contactlist from './component/Contactlist'
// import Fancycards from './component/Fancycards2'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text> App</Text> */}
        {/* <Elevaedcard /> */}
        <Flatcards />
        <Elevaedcard />
        <Fancycards />
        {/* <Fancycards2 /> */}
        <Fancycards2 />
        <Actioncard />
        <Contactlist />
      </ScrollView>

    </SafeAreaView >
  )
}

export default App