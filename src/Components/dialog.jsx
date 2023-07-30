import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Box    
  } from '@mui/material'
  
  
  import { useState } from 'react'
  
   // eslint-disable-next-line react/prop-types, no-unused-vars
   const Dialogs = ({ cardimage, cardtitle,carddescription,cardseasons,cardgenres,cardupdated ,cardid}) => {
//     const inputTime = cardupdated;


  

    const [open, setOpen] = useState(false)
    return (
      <>
      {console.log()}
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
            <DialogContentText id={cardid}>
            
               Description: {carddescription}

            </DialogContentText>
            <DialogContentText id={cardid}>
            
               Updated: {cardupdated}

            </DialogContentText>
            <DialogContentText id={cardid}>
            
            Seasons: {cardseasons}

         </DialogContentText>
         <DialogContentText id={cardid}>
            
            Genres: {cardgenres}

         </DialogContentText>

          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }

   export default Dialogs