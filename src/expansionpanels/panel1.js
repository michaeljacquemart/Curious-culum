import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={"box box1"}>
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className={classes.heading}><strong>Favorite stuff</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <div className="mybadges">  
            <div className="badge">
              <a href="https://api.badgr.io/public/assertions/KrAMkUYpSLemm2bkSEDvBg"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/bogZnt4GSzeLmG-_JwaOAg/image?type=png" /></a><p class="badgr-badge-name">Git</p>
            </div>
            <div className="badge">
              <a href="https://api.badgr.io/public/assertions/RpRP9mejTBWccfsxIYt80w"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/s5KarsEiSZCfoEEJdU6K4w/image?type=png" /></a><p class="badgr-badge-name">JS/React</p>
            </div>
            <div className="badge">
              <a href="https://api.badgr.io/public/assertions/mytGQ1pwStyIuV9ISuww1Q"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/8wTiHCxVRciArgPhnK5CHg/image?type=png" /></a><p class="badgr-badge-name">Linux</p>
            </div>
            <div className="badge">
              <a href="https://api.badgr.io/public/assertions/q1AVZK-OSnyyU5oksjWV6Q"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/l1s363rdRk26ELrEg-mFCQ/image?type=png" /></a><p class="badgr-badge-name">Node.js</p>
            </div>
            <div className="badge">
              <a href="https://api.badgr.io/public/assertions/CzKUVZYBS_2DMreaxvd1Bg"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/OgwUUcD9QBaf64nt2bVm5A/image?type=png" /></a><p class="badgr-badge-name">Javascript</p>
            </div>
            <div className="badge">
              <a href="https://api.badgr.io/public/assertions/53BhP5K4TFqrwaHQD__NcA"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/assertions/53BhP5K4TFqrwaHQD__NcA/image" /></a><p class="badgr-badge-name">Terminal</p>
            </div>
            <div className="badge">
              <a href="https://api.badgr.io/public/assertions/wh4QbodkQeystR6JllWe6Q"><img alt='badge' width="40px" height="40px" src="https://media.badgr.io/uploads/badges/assertion-wh4QbodkQeystR6JllWe6Q.png" /></a><p class="badgr-badge-name">Web APIs</p>
            </div>
            <div className="badge">
              <a href="https://api.badgr.io/public/assertions/5PgmOLdBRpSQyDqv36DUuQ"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/assertions/5PgmOLdBRpSQyDqv36DUuQ/image" /></a><p class="badgr-badge-name">Project Manager</p>
            </div>
            <div className="badge">
              <a href="https://api.badgr.io/public/assertions/i2RggksvTiiwqvoAFg1mtg"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/3g--A5sMSquew2fiNfbdsQ/image?type=png" /></a><p class="badgr-badge-name">Public Speaker</p>
            </div>
          </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    </div>
  );
}
