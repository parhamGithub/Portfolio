import { useEffect, useState } from "react";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";

import MainLayout from "../layouts/mainLayout";
import { Sidebar } from "../components/sidebar";
import { DrawerActionButton } from "../components/drawer";
import PagesContainer from "./pagesContainer";
import { Page } from "../components/pages";
import SidebarContainer from "./sidebarContainer";
import MainContext from "../context";
import { Home, About, Resume, Projects, Comments, Contact } from "../pages";

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };

  const handleThemeChange = () => {
    setMode(prevMode => prevMode === "light" ? "dark" : "light");
  };

  const handlePageChange = index => {
    setPageNumber(index);
  }

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        drawerOpen,
        setDrawerOpen,
        handleThemeChange
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <SwipeableViews
            index={pageNumber}
            onChangeIndex={handlePageChange}
          >
            <Page pageNumber={pageNumber} index={0}>
              <Home helmetTitle="وبسایت شخصی پرهام افشاری" />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About helmetTitle="وبسایت شخصی | درباره من" />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume helmetTitle="وبسایت شخصی | رزومه من" />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Projects helmetTitle="وبسایت شخصی | نمونه کارها" />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Comments helmetTitle="وبسایت شخصی | نظرات" />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Contact helmetTitle={"وبسایت شخصی | ارتباط با من"} />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
