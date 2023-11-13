import React, {useState} from 'react';
import {Box, Card, CardContent, Fade, Icon, IconButton, Tooltip, Typography} from "@mui/material";
import {
  Edit,
  Delete, FileDownload, FileDownloadOutlined, MoreVertOutlined, Close, CloseOutlined
} from "@mui/icons-material";
import {deleteDocument} from "../api/DocumentAPI";
import {DocumentCardStyles} from "../styles/DocumentCardStyles";
import DeleteModal from "./DeleteModal";
const DocumentCard = (props) => {
  const [moreButton, setMoreButton] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  
  const handleDelete = () => {
    deleteDocument(props.id)
      .then(deletedDoc => {
        props.setDocuments((prevDocuments) => (prevDocuments.filter(x => x.id !== deletedDoc.id)));
      })
    setMoreButton(false);
  }
  
  return (
    <>
      <Card sx={DocumentCardStyles.card}>
        <CardContent>
          <Box sx={DocumentCardStyles.contentBox}>
            <Box>
              <Tooltip
                TransitionComponent={Fade}
                placement="top-start"
                title={props.title}>
                <Typography sx={{...DocumentCardStyles.generalText, ...DocumentCardStyles.title}} variant="h6">
                  {props.title}
                </Typography>
              </Tooltip>
              <Box>
                <Typography sx={{...DocumentCardStyles.generalText, ...DocumentCardStyles.content}} variant="body2">
                  {props.text}
                </Typography>
              </Box>
            </Box>
            <Box>
              {moreButton ? (  
                <>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => setDeleteModal(true)}>
                    <Delete />
                  </IconButton>
                  <IconButton>
                    <CloseOutlined onClick={() => setMoreButton(false)} />
                  </IconButton>
                </>
                ) : (
                <>
                  <IconButton onClick={() => setMoreButton(true)}>
                    <MoreVertOutlined />
                  </IconButton>
                  <IconButton>
                    <FileDownloadOutlined />
                  </IconButton>
                </>
                )
              }
            </Box>
          </Box>
        </CardContent>
      </Card>
      <DeleteModal id={props.id} handleDelete={handleDelete} deleteModal={deleteModal} setDeleteModal={setDeleteModal} />
    </>
  );
}

export default DocumentCard;