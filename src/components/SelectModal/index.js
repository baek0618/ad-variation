import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

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

  useEffect(() => {
    if (!open) {
      setVariantSize();
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
                marginTop: "12px",
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
                marginTop: "6px",
                display: "flex",
                fontSize: "0.875rem",
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
              File Name
            </div>
          </UploadFiles>
          <TableView>
            <Table>
              <Row>
                <div>
                  <span style={{ opacity: 0.3 }}>Check</span>
                </div>
                <div style={{ display: "flex" }}>Layout</div>
                <div style={{ fontWeight: "normal" }}>Size</div>
                <div>Media Platform</div>
              </Row>
              <Row>
                <div>
                  <Checkbox
                    checked={variantSize === 0}
                    onChange={() => setVariantSize(0)}
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
                    checked={variantSize === 1}
                    onChange={() => setVariantSize(1)}
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
                    onChange={() => setVariantSize(2)}
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
                    checked={variantSize === 3}
                    onChange={() => setVariantSize(3)}
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
                  640 x 100
                </div>
                <div>
                  <span>6.4:1 / 8.09:1 / 3.2:1 Ratio</span>
                  <span>Google, Amazon, InMobi, Cauly ···</span>
                </div>
              </Row>
            </Table>
            <ButtonWrapper>
              <Button
                onClick={handleClose}
                sx={{
                  ml: "18px",
                  background: "#F5F5F5",
                  color: "#A6A6A6",
                  borderRadius: "8px",
                  border: "1px solid #E7E7E7",
                  padding: "6px 18px",
                  textTransform: "none",
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
                }}
              >
                Variations
              </Button>
            </ButtonWrapper>
          </TableView>
        </Contents>
      </ModalContainer>
    </Modal>
  );
};

export default SelectModal;
