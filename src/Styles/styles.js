import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navbar: {
    width: '100%',
    height: '10%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15
  },
  navbarIcon: {
    width: 25,
    height: 25
  },
  navbarIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
