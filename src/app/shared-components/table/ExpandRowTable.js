export const myPromiseExpandRow = {
    renderer: (row, rowIndex) => (
      <div>
              <p><strong>To</strong> {row.to}</p>
              <p><strong>Description</strong> {row.description}</p>
              <p><strong>Commited Date</strong> {row.committedDate}</p>
              <p><strong>Due Date</strong> {row.dueDate}</p>
              <p><strong>Badge Name</strong> {row.badgeName}</p>
              <p><strong>bchain</strong> {row.bchain}</p>
      </div>
    )
};

export const pendingInvitationExpandRow = {
    renderer: (row, rowIndex) => (
      <div>
              <p><strong>From</strong> {row.from}</p>
              <p><strong>Description</strong> {row.description}</p>
              <p><strong>Created Date</strong> {row.createdDate}</p>
              <p><strong>Due Date</strong> {row.dueDate}</p>
              <p><strong>Badge Name</strong> {row.badgeName}</p>
              <p><strong>Updated Date</strong> {row.updatedDate}</p>
      </div>
    )
};

export const pendingOfferExpandRow = {
    renderer: (row, rowIndex) => (
      <div>
              <p><strong>From</strong> {row.from}</p>
              <p><strong>Description</strong> {row.description}</p>
              <p><strong>Created Date</strong> {row.createdDate}</p>
              <p><strong>Badge Name</strong> {row.badgeName}</p>
              <p><strong>Updated Date</strong> {row.updatedDate}</p>
      </div>
    )
};

export const promisesOwedToMeExpandRow = {
    renderer: (row, rowIndex) => (
      <div>
              <p><strong>From</strong> {row.from}</p>
              <p><strong>Description</strong> {row.description}</p>
              <p><strong>Created Date</strong> {row.createdDate}</p>
              <p><strong>Due Date</strong> {row.dueDate}</p>
              <p><strong>Badge Name</strong> {row.badgeName}</p>
              <p><strong>Updated Date</strong> {row.updatedDate}</p>
      </div>
    )
};