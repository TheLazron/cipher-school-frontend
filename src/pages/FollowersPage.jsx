import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  TableContainer,
  Heading,
  Box,
  Avatar,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "../context/userContext";
const FollowersPage = () => {
  const data = useContext(userContext);
  const user = data?.data?.user._doc;
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    if (user) {
      axios
        .post("http://localhost:8080/getFollowers", { email: user.email })
        .then((data) => {
          const fData = data.data.followers;
          console.log(fData);

          setFollowers([...fData]);
        });
    }
  }, [user]);

  if (followers) {
    console.log("f", followers);
  }
  return (
    <>
      <Box p={5} m={5}>
        <Heading fontSize="4xl">Followers</Heading>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Follower NAme</Th>
                <Th>Avatar</Th>
              </Tr>
            </Thead>
            <Tbody>
              {followers.map((follower, i) => {
                return (
                  <Tr key={i}>
                    <Td>{follower.name}</Td>
                    <Td>
                      <Avatar src={follower.profileUrl} />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default FollowersPage;
