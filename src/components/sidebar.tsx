import React, { useEffect, useState } from 'react';
import '../styles/sidebar.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LabelIcon from '@mui/icons-material/Label';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

interface labelData {
  id: string;
  name: string;
}

const SideBar = ({ open }: { open: boolean }) => {
  const [labels, setLabels] = useState([])
  const labelFetch = async () => {
    const result = await fetch('http://localhost:8000/labelsget').then(async (res: any) => {
      // console.log(res.json());
      let resp = await res.json();
      return resp;
    }).then((res: any) => {
      setLabels(res);
      console.log(res)
      return res;
    })
  }
  useEffect(() => {
    // mails();
    labelFetch();
  }, [])

  // const color = [
  //   {
  //     count: "14",
  //     color: "lightpink",
  //   },
  //   {
  //     count: "",
  //     color: "green",
  //   },
  //   {
  //     count: "20",
  //     color: "blue",
  //   },
  //   {
  //     count: "7",
  //     color: "red",
  //   },
  //   {
  //     count: "3",
  //     color: "red",
  //   },
  //   {
  //     count: "3",
  //     color: "purple",
  //   },
  // ]

  const [hover, setHover] = useState(false);


  return (
    <body>

      <main className="main">

        <div className={`left-bar ${open}`}>
          <button style={{ border: "none" }}>
            <div id="compose" className="compose-item">
              <EditOutlinedIcon className="icons" />
              <span className="compose-hidden">Compose</span>
            </div>
          </button>
          <div className="features">

            <div className="feature-items" id="inbox">
              <MailOutlinedIcon className="icons" />
              <span className="hidden-feature"><strong>Inbox</strong></span>
              <span className="no-message">6969</span>
            </div>

            <div className="feature-items" id="starred">
              <GradeOutlinedIcon className="icons" />
              <span className="hidden-feature">Starred</span>
            </div>

            <div className="feature-items" id="snoozed">
              <WatchLaterOutlinedIcon className='icons' />
              <span className="hidden-feature">Snoozed</span>
            </div>

            <div className="feature-items" id="send">
              <SendOutlinedIcon className='icons' />
              <span className="hidden-feature">Sent</span>
            </div>

            <div className="feature-items" id="drafts">
              <DescriptionOutlinedIcon className='icons' />
              <span className="hidden-feature"><strong>Drafts</strong></span>
              <span className="no-message">69</span>
            </div>

            <div className="feature-items" id="more">
              <ExpandMoreOutlinedIcon className='icons' />
              <span className="hidden-feature">More</span>
            </div>

          </div>

          <div className="labels-heading">
            <span className="hidden-label">Label</span>
            <button style={{ border: "none" }}>
              <AddOutlinedIcon className="icons" />
            </button>
          </div>
          <div className='labelcontainer' >
            {labels.map((label: labelData) => {
              return (
                <div className='label-items' key={label.id} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
                  <div className='label-icon'>
                    <LabelIcon className="labelicon" style={{ color: 'green' }} />
                  </div>
                  <div className='label-name' style={{ display: open ? "flex" : "none" }}>
                    {label.name}
                  </div>
                  <div className='count-unread' style={{ display: open || hover ? "flex" : "none" }}>
                    {69}
                  </div>
                  {/* {hover? (
                      <div className='label-threedot'style={{ display: open?"flex":"none"}}>
                          <MoreVertOutlinedIcon className='label-threedot-icon'/>
                      </div>):""} */}
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </body>
  )
}

export default SideBar;
