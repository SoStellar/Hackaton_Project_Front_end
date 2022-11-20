import { Fragment } from "react";

export default function Loading() {
  return (
    <Fragment>
      <div className="d-flex h-screen w-screen bg-body-purple justify-content-center align-items-center">
        <div className="d-flex">
          <div class="spinner-grow text-primary me-2" role="status"></div>
          <div class="spinner-grow text-secondary me-2" role="status"></div>
          <div class="spinner-grow text-success me-2" role="status"></div>
          <div class="spinner-grow text-danger me-2" role="status"></div>
          <div class="spinner-grow text-warning me-2" role="status"></div>
          <div class="spinner-grow text-info me-2" role="status"></div>
          <div class="spinner-grow text-dark" role="status"></div>
        </div>
      </div>
    </Fragment>
  );
}