export const distortedStyle = {
  filter: "blur(4px)", // Apply a blur effect
  textShadow: `
      1px 1px 2px rgba(0, 0, 0, 0.5),
      -1px -1px 2px rgba(0, 0, 0, 0.5),
      1px -1px 2px rgba(0, 0, 0, 0.5),
      -1px 1px 2px rgba(0, 0, 0, 0.5)
    `, // Add multiple shadows for distortion
  opacity: 0.5, // Adjust the opacity if needed
};
