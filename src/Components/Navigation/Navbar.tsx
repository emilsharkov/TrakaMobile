import { useContext } from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native'
import { styles } from '../../Styles/styles.js'
import { Activity, Home, Profile, Settings, Workouts } from '../../Media/Images/images.js'
import { RouterContext } from '../Routing/Router'

const Navbar = () => {
    const { navigateTo } = useContext(RouterContext)

    return(
        <View style={styles.navbar}>
            <View></View>
            <TouchableOpacity onPress={() => navigateTo('Home')} style={styles.navbarIconContainer}>
                <Image style={styles.navbarIcon} source={Home}/>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo('Workout')} style={styles.navbarIconContainer}>
                <Image style={styles.navbarIcon} source={Workouts}/>
                <Text>Workout</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo('Activity')} style={styles.navbarIconContainer}>
                <Image style={styles.navbarIcon} source={Activity}/>
                <Text>Activity</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo('Profile')} style={styles.navbarIconContainer}>
                <Image style={styles.navbarIcon} source={Profile}/>
                <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo('Settings')} style={styles.navbarIconContainer}>
                <Image style={styles.navbarIcon} source={Settings}/>
                <Text>Settings</Text>
            </TouchableOpacity>
            <View></View>
        </View>
    )
}

export default Navbar