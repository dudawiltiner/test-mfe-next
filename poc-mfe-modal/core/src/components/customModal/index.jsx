import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";

import { Box, Fade, Modal, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";

export default function CustomModal() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="container">
      <div>{t("title")}</div>
      <div>{t("framework")}</div>
      <div>{t("language")}</div>
      <div>{t("css")}</div>
      <Button onClick={toggleModal} variant="contained">
        {t("openModal")}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={toggleModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {t("modalTitle")}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {t("modalDescription")}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
