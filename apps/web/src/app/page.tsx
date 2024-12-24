import Card from "@repo/ui/card";
import Typography from "@repo/ui/typography";

const Overlay = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          bottom: "0.25rem",
          right: "0.25rem",
          background: "gray",
          padding: "0.125rem",
        }}
      >
        Overlay
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0.125rem",
          left: "0.125rem",
          background: "#10151AE5",
          padding: "0.25rem",
        }}
      >
        <Typography size="xs">1:25</Typography>
      </div>
    </>
  );
};

const Hover = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.2)",
        padding: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "2.5rem",
          height: "2.5rem",
          background: "rgba(0, 0, 0, 0.8)",
          padding: "0.5rem",
          display: "flex",
          alignItems: "center",
          borderRadius: "50%",
          justifyContent: "center",
        }}
      >
        {" "}
        icon
      </div>
    </div>
  );
};

const Fallback = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.2)",
        padding: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Fallback
    </div>
  );
};

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="grid gap-4 mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Card
          coverRatio="vertical"
          fallbackComponent={<Fallback />}
          hoverComponent={<Hover />}
        >
          Empty Card with Fallback
        </Card>
        <Card
          coverRatio="vertical"
          fallbackComponent={<Fallback />}
          overlayComponent={<Overlay />}
          hoverComponent={<Hover />}
          cover="https://gateway.telewebion.com/sites/default/files/images/poster/1399/Spider%20Man%20Far%20From%20Home-5.jpg"
          coverTitle="im title"
        >
          Card with Everything
        </Card>
        <Card
          coverRatio="vertical"
          cover="https://gateway.telewebion.com/sites/default/files/images/poster/1399/Spider%20Man%20Far%20From%20Home-1_0.jpg"
        >
          Card
        </Card>
        <Card gradient>Empty Card with Gradient</Card>
        <Card
          cover="https://gateway.telewebion.com/sites/default/files/images/poster/1399/Spider%20Man%20Far%20From%20Home-2_3.jpg"
          overlayComponent={<Overlay />}
          hoverComponent={<Hover />}
          gradient
        >
          <div style={{ textAlign: "right" }}>
            <span>افتتاحیه بازی های المپیک ۲۰۲۰ توکیو در </span>
            <span>اخبار ورزشی</span>
            <span>شروع ۱۲:۳۸</span>
          </div>
        </Card>
        <Card
          ratio={1}
          cover="https://gateway.telewebion.com/sites/default/files/images/backgrounds/1401/Spider-Man-Far-From-Home-33.jpg"
        >
          Custom Ratio Cover
        </Card>
        <Card
          cover="https://gateway.telewebion.com/sites/default/files/images/poster/1399/Spider%20Man%20Far%20From%20Home-2_3.jpg"
          overlayComponent={<Overlay />}
          hoverComponent={<Hover />}
          gradient
          landscape
        >
          <div style={{ textAlign: "right" }}>
            <span>افتتاحیه بازی های المپیک ۲۰۲۰ توکیو در </span>
            <span>اخبار ورزشی</span>
            <span>شروع ۱۲:۳۸</span>
          </div>
        </Card>
      </div>
    </main>
  );
}
