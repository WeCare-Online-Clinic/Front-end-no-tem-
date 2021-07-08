import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  card:{
    width: '400px',
    height: '550px',
  },
  
  typography :{
    textAlign: 'center',
    height: '40px',
    paddingTop: '10px',
  },
  
  header:{
    background: '#3f51b5',
    height: '60px',
    
  },
  
  title : {
    color: 'white',
    textAlign:'right',
    paddingBottom: '12px',
    paddingRight:'30px',
  },
  
  listitem: {
    height: '40px',
  },
  
  primary : {
    width: '100px',
    textAlign: 'center',
  },
  
  secondary : {
    textAlign: 'left',
  },
  
  grid : {
    marginTop: '15px',
    marginBottom: '15px',
  },
  
  cardaction : {
    justifyContent: 'center',
  },
  
  label : {
    backgroundColor: 'orange',
    paddingLeft: '5px',
    paddingRight: '5px',
    color: 'white',
  },
      
      
  }))


export default function NurseProfileCard() {

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography className={classes.typography} color="textSecondary" >
        Nurse Profile
      </Typography>
      <div className={classes.header}>
        <CardHeader 
          avatar={
            <Avatar className={classes.avatar} src="/static/images/avatar/1.jpg" />    
          }
          title={
            <Typography className={classes.title} color="textSecondary" >
              Miss. Asanaka Perera
            </Typography>
          }
        />
      </div>
      <CardContent>
        <Grid container alignItems="center"  className={classes.grid}>
          <List  >
            <ListItem className={classes.listitem} >
              <ListItemText className={classes.primary} primary="Clinic ID" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Gender" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Age" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Qualifications" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Contact No" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Email" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Clinic" />
            </ListItem>
          </List>

          <List>
            <ListItem className={classes.listitem} >
              <ListItemText className={classes.secondary} secondary=":298N" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary=":Female" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary=":35" />
            </ListItem>
            <ListItem className={classes.listitem} >
              <ListItemText className={classes.secondary} secondary=":BSN" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary=":0773618967" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary=":nurse@gmail.com" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary=":Eye Clinic" />
            </ListItem>
          </List>
        </Grid>
      </CardContent>
      
      <CardActions className={classes.cardaction}>
        <Button variant="contained" color="primary" className={classes.label}>Update</Button>
      </CardActions>

    </Card>
  );
  
}





