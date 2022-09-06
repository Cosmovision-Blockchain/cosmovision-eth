import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AccountTree from "@material-ui/icons/AccountTree";
import Nature from "@material-ui/icons/Nature";
import Update from "@material-ui/icons/Update";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
// images
import ImageOne from '../../public/img/image_one.jpg';
import ImageTwo from '../../public/img/image_two.jpg';
import ImageThree from '../../public/img/image_three.jpg';

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import { element } from "prop-types";
import Button from "../../components/CustomButtons/Button"

const useStyles = makeStyles(styles);

const initialState = [
  {
    title: "A social project...",
    name: "Kichwa Community",
    description: "The Kichwa are an indigenous population of approximately 55,000 people who inhabit the Ecuadorian jungle, which stretches from the Andean foothills to the Amazon lowlands. They know the threats to their way of life and their territory, an area that covers more than one million hectares (2.5 million acres), won...",
    image: "https://ep00.epimg.net/elpais/imagenes/2017/05/16/album/1494949413_951320_1494950607_album_normal.jpg"
  },
  {
    title: "A cultural project...",
    name: "Another Community",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting...",
    image: "https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image-720x530.jpg"
  },
  {
    title: "A cultural project...",
    name: "Another Community",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting...",
    image: "https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image-720x530.jpg"
  },
  {
    title: "A cultural project...",
    name: "Another Community",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting...",
    image: "https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image-720x530.jpg"
  },
]

export default function CollectionSection() {
  const [collections, setCollections] = useState(initialState)
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer style={{flex: 1}}>
        {collections.map(element => (
          <GridItem>
            <h2 className={classes.title}>{element.name}</h2>
            <GridContainer style={{ alignItems: "center" }}>
              <GridItem xs={12} sm={12} md={6} style={{ margin: "12px 0"}}>
                <div style={{ 
                  borderRadius: '50%',
                  width: '300px',
                  height: '300px',
                  position: 'relative',
                  overflow: 'hidden',
                  margin: '0 auto'
                }}>
                  <img style={{
                    width: 'auto',
                    height: '100%',
                    marginLeft: '-100px'
                  }} 
                  src={element.image} alt='descentralized' />
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={6} style={{ margin: "50px 0" }}>
                <InfoArea
                  title={element.title}
                  description={element.description}
                  icon={AccountTree}
                  vertical
                />
                <Button>
                  View {element.name} collection
                </Button>
              </GridItem>
            </GridContainer>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
}