import React from "react";
import Button from "../components/ui/button/Button";
import "./ButtonDemo.css";

/**
 * ButtonDemo Component
 * @returns Dom
 */
export const ButtonDemo: React.FC = () => {
  /** クリック時非同期処理 */
  const handleAsyncClick = async (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert("Button clicked.");
        resolve();
      }, 0);
    });
  };

  return (
    <div className="button-demo">
      <h1>Button Demo</h1>

      <div className="button-group">
        <Button
          label="ボタン1"
          onClick={handleAsyncClick}
          iconLeft={<span>📞</span>}
          iconRight={<span>⚽</span>}
          variant="black"
        />
      </div>

      <div className="button-group">
        <Button
          label="ボタン2"
          onClick={handleAsyncClick}
          iconLeft={<span>😀</span>}
          variant="outlined"
        />
      </div>

      <div className="button-group">
        <Button
          label="ボタン3"
          onClick={handleAsyncClick}
          iconRight={<span>👍</span>}
          variant="white"
        />
      </div>

      <div className="button-group">
        <Button
          label="ボタン4"
          onClick={handleAsyncClick}
          variant="outlined"
          width={200}
        />
        幅 200px
      </div>

      <div className="button-group">
        <Button
          label="ボタン5"
          onClick={handleAsyncClick}
          variant="outlined"
          height={70}
        />
        高さ 70px
      </div>

      <div className="button-group">
        <Button
          label="リンクボタン"
          href="https://www.google.co.jp/"
          target="_blank"
          variant="outlined"
        />
      </div>

      <div className="button-group">
        <Button label="非活性ボタン" disabled={true} variant="outlined" />
      </div>

      <div className="button-group">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted.");
          }}
        >
          <Button label="Submitボタン" type="submit" variant="outlined" />
        </form>
      </div>
    </div>
  );
};

export default ButtonDemo;
