import { PostModalStyles } from "../styles/PostModalStyles";
import {Box, Modal, Typography} from "@mui/material";

const PostModal = (props) => {
  return (
    <Modal
      open={true}
      // onClose={}
    >
      <Box sx={PostModalStyles.modalStyle}>
        <Typography variant="h2" sx={PostModalStyles.postTitle} >Post title</Typography>
      </Box>
    </Modal>
  )
}

export default PostModal;