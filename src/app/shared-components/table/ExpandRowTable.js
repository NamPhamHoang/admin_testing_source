export const myPromiseExpandRow = {
  renderer: (row, rowIndex) => (
    <div className="div-show-respon">
      <p className="p-show-respon row-1">
        <strong>To</strong> {row.to}
      </p>
      <p className="p-show-respon row-2">
        <strong>Description</strong> {row.description}
      </p>
      <p className="p-show-respon row-3">
        <strong>Commited Date</strong> {row.committedDate}
      </p>
      <p className="p-show-respon row-4">
        <strong>Due Date</strong> {row.dueDate}
      </p>
      <p className="p-show-respon row-5">
        <strong>Badge Name</strong> {row.badgeName}
      </p>

      {row.bchain && (
        <p className="p-show-respon row-7">
          <strong>bchain</strong>{" "}
          <div>
            <a href="#">
              <i class="fas fa-link fa-2x"></i>
            </a>
          </div>
        </p>
      )}
    </div>
  ),
};

export const pendingInvitationExpandRow = {
  renderer: (row, rowIndex) => (
    <div className="div-show-respon">
      <p className="p-show-respon row-1">
        <strong>From</strong> {row.from}
      </p>
      <p className="p-show-respon row-2">
        <strong>Description</strong> {row.description}
      </p>
      <p className="p-show-respon row-3">
        <strong>Created Date</strong> {row.createdDate}
      </p>
      <p className="p-show-respon row-4">
        <strong>Due Date</strong> {row.dueDate}
      </p>
      <p className="p-show-respon row-5">
        <strong>Badge Name</strong> {row.badgeName}
      </p>
      <p className="p-show-respon row-6">
        <strong>Updated Date</strong> {row.updatedDate}
      </p>
    </div>
  ),
};

export const pendingOfferExpandRow = {
  renderer: (row, rowIndex) => (
    <div className="div-show-respon">
      <p className="p-show-respon row-1">
        <strong>From</strong> {row.from}
      </p>
      <p className="p-show-respon row-2">
        <strong>Description</strong> {row.description}
      </p>
      <p className="p-show-respon row-3">
        <strong>Created Date</strong> {row.createdDate}
      </p>
      <p className="p-show-respon row-4">
        <strong>Badge Name</strong> {row.badgeName}
      </p>
      <p className="p-show-respon row-5">
        <strong>Updated Date</strong> {row.updatedDate}
      </p>
    </div>
  ),
};

export const promisesOwedToMeExpandRow = {
  renderer: (row, rowIndex) => (
    <div className="div-show-respon">
      <p className="p-show-respon row-1">
        <strong>From</strong> {row.from}
      </p>
      <p className="p-show-respon row-2">
        <strong>Description</strong> {row.description}
      </p>
      <p className="p-show-respon row-3">
        <strong>Created Date</strong> {row.createdDate}
      </p>
      <p className="p-show-respon row-4">
        <strong>Due Date</strong> {row.dueDate}
      </p>
      <p className="p-show-respon row-5">
        <strong>Badge Name</strong> {row.badgeName}
      </p>
      <p className="p-show-respon row-6">
        <strong>Updated Date</strong> {row.updatedDate}
      </p>
    </div>
  ),
};
