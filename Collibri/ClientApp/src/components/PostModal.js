import { PostModalStyles } from "../styles/PostModalStyles";
import {Box, Button, Modal, Typography} from "@mui/material";
import {
  Close,
  ThumbUp,
  ThumbUpOffAltOutlined,
  ThumbDown,
  ThumbDownOffAltOutlined,
  Delete,
  Edit
} from '@mui/icons-material';

const PostModal = (props) => {
  
  
  return (
    <Modal
      open={props.postModal}
      onClose={props.handleClose}
    >
      <Box sx={PostModalStyles.modalStyle}>
        <Box sx={PostModalStyles.info}>
          <Typography sx={PostModalStyles.title} variant="h2">Post asdasd asdasd title</Typography>
          <Box sx={PostModalStyles.descriptionBox}>
            <Typography sx={PostModalStyles.description} variant="body1">khfadskfhdskfhdflkjdhflkdajshfadslkjfhdaslkjfhalkdjfhadlkjfhadjlkfhalkdjfhjdhfjlkdfkdhsjfhadsflkjjdashfdashfdaskfhdsafkldsafhldakfjhafkjahdkjahfalkjdsfhlkajdsfhdajkfhdslkajfhdsalkjhfalkdsjhfkjdashfkjdahjfadhsjlkfahdkfjhafkjlads</Typography>
            <Box sx={PostModalStyles.userAndDateBox}>
              <Typography variant="body1">asd</Typography>
              <Typography variant="body1">asdasd</Typography>
            </Box>
          </Box>
          <Box>
            <Button sx={PostModalStyles.closeButton} onClick={props.handleClose}>
              <Close />
            </Button>
          </Box>
        </Box>
        <Box sx={PostModalStyles.contentBox}>
          
        </Box>
        <Box sx={PostModalStyles.buttonBox}>
          <Box>
            <Button>
              <ThumbUpOffAltOutlined />
            </Button>
            <Button>
              <ThumbDownOffAltOutlined />
            </Button>
          </Box>
          <Box>
            <Button>
              <Edit />
            </Button>
            <Button>
              <Delete />
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default PostModal;