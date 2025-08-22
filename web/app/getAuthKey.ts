export async function getAuthKey(
    userId: string,
    isGuidedDemo: boolean,
    customSuffix: string = ""
  ): Promise<{ accessManagerToken: string | undefined }> {
    try {
      const TOKEN_SERVER = process.env.NEXT_PUBLIC_TOKEN_SERVER;
      if (!TOKEN_SERVER) {
        return {
          accessManagerToken: undefined,
        };
      }
      const serverUrl = `${TOKEN_SERVER}${isGuidedDemo ? `-guided${customSuffix}` : ''}`;
      const response = await fetch(`${serverUrl}/grant`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ UUID: userId }),
      });
  
      const data = await response.json();
      if (data.statusCode !== 200) {
        console.error('Authentication failed');
      } else {
        const token = data.body.token;
        return {
          accessManagerToken: token,
        };
      }
    } catch (error: any) {
      console.error('Failed to obtain authentication token');
    }
  
    return {
      accessManagerToken: undefined,
    };
  }
  