import React from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Box    
  } from '@mui/material'
  import BasicSelect from './Season'
  
  import { useState } from 'react'
  
   // eslint-disable-next-line react/prop-types, no-unused-vars
   const Dialogs = ({ cardimage, cardtitle,carddescription,cardgenres,cardupdated ,cardid}) => {
    const [showid, setShowid] = React.useState()
    
    
    
    React.useEffect(() => {
      fetch(`https://podcast-api.netlify.app/id/${cardid}`)
        .then(res => res.json())
        .then(data => {setShowid(data);
        })
        .catch(error => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // console.log(showid.seasons)
    

    const [open, setOpen] = useState(false)
    return (
      <>
      
        <Button onClick={() => setOpen(true)}>Description</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby='dialog-title'
          aria-describedby='dialog-description'>
          <DialogTitle sx={{display: 'flex',
                            margin: 'auto'}}  id='dialog-title'>{cardtitle}</DialogTitle>
          <DialogContent>
          <Box
                    component="img"
                    sx={{  
                            height: 233,
                            width: 350,
                            maxHeight: { xs: 200, md: 167 },
                            maxWidth: { xs: 200, md: 250 },
                            display: 'flex',
                            margin: 'auto'
                    }}
                    src={cardimage}
                  />
            <DialogContentText >
               Description: {carddescription}
            </DialogContentText>
            <DialogContentText >
               Updated: {cardupdated}
            </DialogContentText>
            <DialogContentText >
            Genres: {cardgenres}
         </DialogContentText>
         <DialogActions>
         <BasicSelect  idSeasons={showid} />
         
         </DialogActions>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Close</Button>
            
          </DialogActions>
        </Dialog>
      </>
    )
  }

   export default Dialogs