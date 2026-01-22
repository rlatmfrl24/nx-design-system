"use client";

import type { ChangeEvent } from "react";
import { useState } from "react";
import {
  Box,
  Divider,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Alert } from "./components/alert.component";
import { Button } from "./components/button.component";
import { Dialog } from "./components/diaolg.component";
import { Footer } from "./components/footer.component";
import { SearchArea } from "./components/search-area.component";
import { Header } from "./header";

type AlertVariant = "singleButton" | "doubleButton" | "typing" | "radioButton";
type DialogScenario = "basic" | "form";

const PageRoot = styled(Box)(({ theme }) => ({
  height: "100vh",
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
}));



const SectionsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: theme.spacing(3),
}));

const SectionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}));

const ButtonRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

const AlertButtons = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: theme.spacing(1),
}));

const StatusNote = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const defaultAlertOptions = [
  { label: "Single Button", type: "singleButton" },
  { label: "Double Button", type: "doubleButton" },
  { label: "Typing", type: "typing" },
  { label: "Radio Button", type: "radioButton" },
] as const;

const PageBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      display="flex"
      flex={1}
      overflow="auto"
      p={2}
      sx={{
        backgroundColor: 'blueGrey.100',
      }}>
      <Box display="flex" flex={1} flexDirection="column" borderRadius={2} sx={{
        backgroundColor: 'white',
      }}>
        <Box display="flex" p={1.5} borderBottom={1} borderColor="divider">11</Box>
        <Box display="flex" flexDirection="column" flex={1} p={1.5} gap={1}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default function Home() {
  const [activeAlert, setActiveAlert] = useState<AlertVariant | null>(null);
  const [activeDialog, setActiveDialog] = useState<DialogScenario | null>(null);
  const [alertText, setAlertText] = useState("");
  const [alertRadio, setAlertRadio] = useState("option-1");
  const [searchStatus, setSearchStatus] = useState("all");

  const handleAlertClose = () => setActiveAlert(null);
  const handleDialogClose = () => setActiveDialog(null);

  const handleAlertTextChange = (value: string) => setAlertText(value);

  const handleRadioChange = (value: string) => setAlertRadio(value);

  const handleStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchStatus(event.target.value);
  };

  const dialogContent =
    activeDialog === "basic" ? (
      <Stack gap={1.5}>
        <Typography variant="subtitle1">임시 콘텐츠</Typography>
        <Typography variant="body2" color="text.secondary">
          기본 안내 텍스트와 설명을 담는 시나리오입니다.
        </Typography>
        <Divider />
        <Typography variant="body2">
          확인 전 사용자에게 핵심 정보를 전달합니다.
        </Typography>
      </Stack>
    ) : activeDialog === "form" ? (
      <Stack gap={1.5}>
        <Typography variant="subtitle1">입력 폼 시나리오</Typography>
        <Typography variant="body2" color="text.secondary">
          복합 UI 조합을 확인하기 위한 예시입니다.
        </Typography>
        <Stack direction="row" gap={1}>
          <TextField size="small" label="Name" fullWidth />
          <TextField size="small" label="Role" fullWidth />
        </Stack>
        <TextField size="small" label="Message" multiline rows={3} />
      </Stack>
    ) : null;

  return (
    <PageRoot>
      <Header />
      <PageBody>
        <SearchArea>
          <TextField
            label="Status"
            size="small"
            select
            value={searchStatus}
            onChange={handleStatusChange}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </TextField>
          <TextField label="Keyword" size="small" sx={{ minWidth: '100px' }} />
          <TextField label="Keyword" size="small" sx={{ minWidth: '100px' }} />
          <TextField label="Keyword" size="small" sx={{ minWidth: '100px' }} />
          <TextField label="Keyword" size="small" sx={{ minWidth: '100px' }} />
          <TextField label="Keyword" size="small" sx={{ minWidth: '100px' }} />
        </SearchArea>

        <SectionsGrid>
          <SectionCard variant="outlined">
            <SectionHeader>
              <Typography variant="h6">Button</Typography>
              <StatusNote variant="body2">
                기본 버튼 스타일과 상태
              </StatusNote>
            </SectionHeader>
            <Divider />
            <ButtonRow>
              <Button label="Contained" variant="contained" color="primary" />
              <Button label="Outlined" variant="outlined" color="primary" />
              <Button label="Text" variant="text" color="primary" />
              <Button label="Disabled" variant="contained" disabled />
              <Button label="Inherit" color="inherit" variant="outlined" />
            </ButtonRow>
          </SectionCard>

          <SectionCard variant="outlined">
            <SectionHeader>
              <Typography variant="h6">Dialog</Typography>
              <StatusNote variant="body2">
                다양한 UI 콘텐츠 예시
              </StatusNote>
            </SectionHeader>
            <Divider />
            <ButtonRow>
              <Button
                label="기본 콘텐츠 열기"
                variant="outlined"
                color="primary"
                onClick={() => setActiveDialog("basic")}
              />
              <Button
                label="폼 시나리오 열기"
                variant="outlined"
                color="primary"
                onClick={() => setActiveDialog("form")}
              />
            </ButtonRow>
            <Dialog
              open={Boolean(activeDialog)}
              title={activeDialog === "form" ? "입력 폼" : "기본 안내"}
              content={dialogContent}
              actionLabel="닫기"
              onClose={handleDialogClose}
              onActionClick={handleDialogClose}
            />
          </SectionCard>

          <SectionCard variant="outlined">
            <SectionHeader>
              <Typography variant="h6">Alert</Typography>
              <StatusNote variant="body2">
                타입별 Alert 모달 확인
              </StatusNote>
            </SectionHeader>
            <Divider />
            <AlertButtons>
              {defaultAlertOptions.map((option) => (
                <Button
                  key={option.type}
                  label={option.label}
                  variant="outlined"
                  color="primary"
                  onClick={() => setActiveAlert(option.type)}
                />
              ))}
            </AlertButtons>
            <StatusNote variant="caption">
              버튼을 클릭해 각 Alert 타입을 확인하세요.
            </StatusNote>
          </SectionCard>
        </SectionsGrid>
      </PageBody>

      {activeAlert && (
        <Alert
          open
          type={activeAlert}
          title="Alert Title"
          description="설명 텍스트가 여기에 표시됩니다."
          primaryActionLabel="확인"
          secondaryActionLabel="취소"
          textFieldHelperText="Helper text"
          textFieldPlaceholder="Sample input"
          onPrimaryAction={handleAlertClose}
          onSecondaryAction={handleAlertClose}
          onClose={handleAlertClose}
          textFieldValue={alertText}
          onTextFieldChange={handleAlertTextChange}
          radioOptions={[
            { label: "Option 01", value: "option-1" },
            { label: "Option 02", value: "option-2" },
          ]}
          radioValue={alertRadio}
          onRadioChange={handleRadioChange}
        />
      )}
      <Footer
        actions={
          <>
            <Button label="Reset" variant="outlined" color="primary" />
            <Button label="Apply" variant="contained" color="primary" />
          </>
        }
      />
    </PageRoot>
  );
}
