import React, { useEffect, useState, useRef } from "react";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 1000px;
  height: 700px;
  border: none;
  border-radius: 15px;
  padding: 57px 59px;
  font-family: gmarketSansMedium;
`;
const Title = styled.div`
  font-size: 1.875rem;
  font-family: gmarketSansBold;
  margin-bottom: 4px;
`;
const SubTitle = styled.div``;

const Contents = styled.div`
  display: flex;
  padding-top: 50px;
  flex: 1;
`;
const UploadFiles = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 63px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  align-items: center;
  border-bottom: 1px solid #d5d5d5;
  div:nth-child(1) {
    width: 10%;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
  }
  div:nth-child(3) {
    width: 25%;
    font-size: 0.875rem;
  }
  div:nth-child(4) {
    width: 40%;
    display: flex;
    flex-direction: column;
    span:nth-child(1) {
      color: #000000;
      font-size: 0.875rem;
    }
    span:nth-child(2) {
      color: #666666;
      font-size: 11px;
    }
  }
`;
const Layout = styled.div`
  border: 1px solid #e7e7e7;
  background: #f5f5f5;
  border-radius: 4px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const TableView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const SelectModal = ({ open, handleClose }) => {
  const [variantSize, setVariantSize] = useState();
  const [targetFile, setTargetFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const inputFile = useRef(null);

  useEffect(() => {
    return () => {
      setVariantSize();
      setTargetFile();
      setIsLoading(false);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      setVariantSize();
    }
  }, [open]);

  const handleFile = (e) => {
    setTargetFile(e.target.files[0]);
  };

  const handleVariantSize = (newVariantSize) => {
    setVariantSize(newVariantSize);
    if (!targetFile) {
      inputFile.current.click();
    }
  };

  const handleCancel = () => {
    setVariantSize();
    setTargetFile();
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const api_url = "https://adwin-418207.du.r.appspot.com/infer";
    const size = variantSize.toString();
    var data = new FormData();
    data.append("psd_file", targetFile);
    data.append("idx", size);

    fetch(api_url, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        return response.text();
      })
      .then((response) => {
        const jsonData = JSON.parse(response);
        if (jsonData.image) {
          const ImageBase64 = jsonData.image;

          var a = document.createElement("a"); //Create <a>
          a.href = "data:image/png;base64," + ImageBase64; //Image Base64 Goes here
          a.download = "Image.png"; //File name Here
          a.click(); //Downloaded file
          handleModalClose();
        } else {
          alert("Please check the input data.");
        }
      })
      .catch((error) => {
        console.error(error); // this line can also throw, e.g. when console = {}
        alert("Please check the input data.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleModalClose = () => {
    setVariantSize();
    setTargetFile();
    setIsLoading(false);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <ModalContainer>
        <Title>Select variation size</Title>
        <SubTitle>
          Choose the right size for your media platforms and get automatic
          variations
        </SubTitle>
        <Contents>
          <UploadFiles>
            <img
              style={{ width: "180px" }}
              src="./img/icons/Data_11@2x.png"
              alt=""
            />
            <div
              style={{
                fontSize: "0.938rem",
                fontWeight: "bold",
                marginTop: "34px",
                fontFamily: "gmarketSansBold",
              }}
            >
              Upload file
            </div>
            <div
              style={{
                padding: "6px 14px",
                borderRadius: "16px",
                border: "1px solid #D5D5D5",
                marginTop: "8px",
                display: "flex",
                fontSize: "0.688rem",
                fontWeight: "bold",
                justifyContent: "center",
                alignItems: "center",
                width: "fit-content",
              }}
            >
              MY PC
            </div>

            <div
              style={{
                fontSize: "0.938rem",
                fontWeight: "bold",
                marginTop: "38px",
                fontFamily: "gmarketSansBold",
              }}
            >
              File name
            </div>
            {targetFile?.name && (
              <div
                style={{
                  fontSize: "12px",
                  marginTop: "6px",
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "gmarketSansMedium",
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    p: 0,
                    minWidth: "20px",
                    minHeight: "0px",
                    mr: "6px",
                    color: "#C4C4C4",
                  }}
                  onClick={handleCancel}
                >
                  x
                </Button>
                {targetFile?.name}
              </div>
            )}
          </UploadFiles>
          <TableView>
            <Table>
              <Row>
                <div>
                  <span style={{ opacity: 0.3 }}>Check</span>
                </div>
                <div style={{ display: "flex" }}>Layout</div>
                <div style={{ fontWeight: "normal" }}>Size</div>
                <div>Media platform</div>
              </Row>
              <Row>
                <div>
                  <Checkbox
                    checked={variantSize === 1}
                    onChange={() => handleVariantSize(1)}
                    sx={{ color: "#D5D5D5" }}
                  />
                </div>
                <div>
                  <Layout style={{ width: "59px", height: "59px" }} />
                </div>
                <div
                  style={{
                    fontFamily: "gmarketSansBold",
                  }}
                >
                  1200 x 1200
                </div>
                <div>
                  <span>1:1 / 1.2:1 / 1:1.2 Ratio</span>
                  <span>Adison, Facebook, Naver Webtoon ···</span>
                </div>
              </Row>
              <Row>
                <div>
                  <Checkbox
                    checked={variantSize === 3}
                    onChange={() => handleVariantSize(3)}
                    sx={{ color: "#D5D5D5" }}
                  />
                </div>
                <div>
                  <Layout style={{ width: "59px", height: "32px" }} />
                </div>
                <div
                  style={{
                    fontFamily: "gmarketSansBold",
                  }}
                >
                  1200 x 600
                </div>
                <div>
                  <span>2:1 / 16:9 / 1.91:1 Ratio</span>
                  <span>Youtube, Naver, Kakao, Toss ···</span>
                </div>
              </Row>
              <Row>
                <div>
                  <Checkbox
                    checked={variantSize === 2}
                    onChange={() => handleVariantSize(2)}
                    sx={{ color: "#D5D5D5" }}
                  />
                </div>
                <div>
                  <Layout style={{ width: "32px", height: "59px" }} />
                </div>
                <div
                  style={{
                    fontFamily: "gmarketSansBold",
                  }}
                >
                  600 x 1200
                </div>
                <div>
                  <span>1:2 / 9:16 / 1:3.75 Ratio</span>
                  <span>Cashslide, Snow, Instagram ···</span>
                </div>
              </Row>
              <Row>
                <div>
                  <Checkbox
                    checked={variantSize === 4}
                    onChange={() => handleVariantSize(4)}
                    sx={{ color: "#D5D5D5" }}
                  />
                </div>
                <div>
                  <Layout style={{ width: "97px", height: "17px" }} />
                </div>
                <div
                  style={{
                    fontFamily: "gmarketSansBold",
                  }}
                >
                  1280 x 200
                </div>
                <div>
                  <span>6.4:1 / 8.09:1 / 3.2:1 Ratio</span>
                  <span>Google, Amazon, InMobi, Cauly ···</span>
                </div>
              </Row>
            </Table>
            <ButtonWrapper>
              <Button
                onClick={handleModalClose}
                sx={{
                  ml: "18px",
                  background: "#F5F5F5",
                  color: "#A6A6A6",
                  borderRadius: "8px",
                  border: "1px solid #E7E7E7",
                  padding: "6px 18px",
                  textTransform: "none",
                  fontFamily: "gmarketSansBold",
                  width: "143px",
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  ml: "18px",
                  background: "#005CF1",
                  color: "white",
                  borderRadius: "8px",
                  padding: "6px 18px",
                  textTransform: "none",
                  fontFamily: "gmarketSansBold",
                  width: "143px",
                }}
                onClick={handleSubmit}
                disabled={!targetFile}
              >
                Variations
              </Button>
            </ButtonWrapper>
          </TableView>
        </Contents>

        <input
          type="file"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={handleFile}
        />

        {isLoading && (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </ModalContainer>
    </Modal>
  );
};

export default SelectModal;
