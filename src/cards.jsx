import React from 'react'
import {Card, Grid, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'

class CustomCard extends React.Component {
  render() {
    return (
      <Card>
        <CardActionArea>
          {/* <CardMedia
            style={{height: 0, paddingTop: '56.25%'}}
            src={this.props.image}
            title={this.props.title}
          /> */}
          <img src={this.props.image} style={{height: 140}}/>
          <CardContent>
            <Typography gutterBottom variant={'h5'}>
              {this.props.title}
            </Typography>
            <Typography variant={'body2'}>
              {this.props.contentBody}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container justify={'space-between'}>
            <Grid item>
              <Button variant={'contained'} target={'blank'} href={this.props.githubLink}>
                Github
              </Button>
            </Grid>
            <Grid item>
              {this.props.webLink != null && <Button variant={'contained'} target={'blank'} href={this.props.webLink}>
                Website
              </Button>}
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    )
  }
}

export default CustomCard
