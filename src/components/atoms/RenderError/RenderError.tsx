import type { ReactNode } from "react";

export const RenderError = ({ children }: { children: ReactNode }) => {
  return (
    <p style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>
      <span
        style={{
          display: "block",
          fontWeight: "bold",
          color: "tomato",
          marginBottom: "1rem",
        }}
      >
        ⚠️Error⚠️
      </span>
      {children}
    </p>
  );
};
