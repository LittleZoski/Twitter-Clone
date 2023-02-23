import { User } from "@/types/user";
import { Card, Text, Group, Avatar } from "@mantine/core";
import FollowUser from "./FollowUser";
import NumberFollowers from "./NumberFollowers";
import NumberFollowing from "./NumberFollowing";

function UserProfileDetails({ user }: { user: User }) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}>
 <Card  p="lg" radius="md" mb="lg" withBorder w="70%" miw="30vw" h="25vh">
      <Card.Section inheritPadding py="xs">
          <Avatar
            radius="xl"
            src={`https://loremflickr.com/320/240/nature?${user.id}`}
          />
          <Text fz="25px"fw={700}>{user?.name}</Text>
          <Text fz="medium">@{user?.username}</Text>
          <Text>{user.about}</Text>
          <Group>
            <Group>
                <NumberFollowing id={user.id} />
                <Text>Following</Text>
            </Group>
            
            <Group>
              <NumberFollowers id={user.id}/>
              <Text>Followers</Text>
            </Group>
            <FollowUser user={user}/>
        </Group>

      </Card.Section>
    </Card>
    </div>
    )
  }
  
  export default UserProfileDetails;