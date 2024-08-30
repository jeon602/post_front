import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import React from "react";

export function HomeLayout() {
  return (
    <Box>
      <Box>Navbar</Box>
      <Outlet />
    </Box>
  );
}
