/* global React, ReactDOM */
const {
  TweaksPanel, useTweaks, TweakSection, TweakRadio,
  SlideCover, SlideIndex, SlideDividerField, SlideField,
  SlideDividerColor, SlideColorCore, SlideColorAccents, SlideColorSemantics,
  SlideDividerType, SlideTypeTriad, SlideTypeScale,
  SlideDividerTokens, SlideTokens, SlideSpacing,
  SlideDividerComponents, SlideComponents,
  SlideDividerMotifs, SlideMotifs,
  SlideDividerPlates, SlidePlateGallery,
  PlateDetailSlides, SlideBrandMark, SlideBrandClearSpace,
  SlideDoDont, SlideA11y, SlideMotion, SlideClosing,
} = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "gold",
  "mode": "dark"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-accent", tweaks.accent);
    document.documentElement.setAttribute("data-mode", tweaks.mode);
  }, [tweaks.accent, tweaks.mode]);

  return (
    <>
      <deck-stage>
        <SlideCover />
        <SlideIndex />
        <SlideDividerField />
        <SlideField />
        <SlideDividerColor />
        <SlideColorCore />
        <SlideColorAccents />
        <SlideColorSemantics />
        <SlideDividerType />
        <SlideTypeTriad />
        <SlideTypeScale />
        <SlideDividerTokens />
        <SlideTokens />
        <SlideSpacing />
        <SlideDividerComponents />
        <SlideComponents />
        <SlideDividerMotifs />
        <SlideMotifs />
        <SlideDividerPlates />
        <SlidePlateGallery />
        {PlateDetailSlides()}
        <SlideBrandMark />
        <SlideBrandClearSpace />
        <SlideDoDont />
        <SlideA11y />
        <SlideMotion />
        <SlideClosing />
      </deck-stage>

      <TweaksPanel title="Tweaks">
        <TweakSection title="accent">
          <TweakRadio
            value={tweaks.accent}
            onChange={(v) => setTweak("accent", v)}
            options={[
              { value: "gold", label: "gold" },
              { value: "teal", label: "teal" },
              { value: "oxblood", label: "oxblood" },
            ]}
          />
        </TweakSection>
        <TweakSection title="mode">
          <TweakRadio
            value={tweaks.mode}
            onChange={(v) => setTweak("mode", v)}
            options={[
              { value: "dark", label: "dark" },
              { value: "light", label: "light" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
