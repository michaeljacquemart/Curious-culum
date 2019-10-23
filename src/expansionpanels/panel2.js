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
    <div className={"box box2"}>
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className={classes.heading}><strong>Other skills</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <div className="badge"> 
            <a href="https://api.badgr.io/public/assertions/3TC7z_4uSIWaP-2RYtyVOw"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/Dz4Akeq2R-qY4ZMU13fxwg/image?type=png" /></a><p class="badgr-badge-name">HTML 5</p>
          </div>
          <div className="badge">
            <a href="https://api.badgr.io/public/assertions/byISJ1yLTPiEl3ZzioMWPQ"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/3Sjhj2AeRdmdSGb_i16oaA/image?type=png" /></a><p class="badgr-badge-name">CSS3 - level 2</p>
          </div>
          <div className="badge">
            <a href="https://api.badgr.io/public/assertions/fBd5_IYURZSq5aq3IKHDVA"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/IL4mQSyyRyumKbiIw4059g/image?type=png" /></a><p class="badgr-badge-name">Sass</p>
          </div>
          <div className="badge">
            <a href="https://api.badgr.io/public/assertions/pzupfLzhRT-D4uNxySds5w"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/yyA2Jpu-Suyw1n0L6vwlbA/image?type=png" /></a><p class="badgr-badge-name">CMS</p>
          </div>
          <div className="badge">
            <a href="https://api.badgr.io/public/assertions/HNbwl0yiScC6swTsB0N2yA"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/rRbQeB3fTH67xo4gr4u4yw/image?type=png" /></a><p class="badgr-badge-name">Accessibility</p>
          </div>
          <div className="badge">
            <a href="https://api.badgr.io/public/assertions/Ru3N98QXR0CGK2rE9RGzIw"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/wmsi6BVQQdun7xp23zQUtA/image?type=png" /></a><p class="badgr-badge-name">Copywriter</p>
          </div>
          <div className="badge">
            <a href="https://api.badgr.io/public/assertions/ZoqVWbZ8TfyFGjawDakd2Q"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/Xc7_cJ9dTVKj6-ueu-ujLg/image?type=png" /></a><p class="badgr-badge-name">GUI Prototyping</p>
          </div>
          <div className="badge">
            <a href="https://api.badgr.io/public/assertions/DvbxX-R0QBGoTfmWC4-YBA"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/V_adxKUDSJutiOGpkGfiXQ/image?type=png" /></a><p class="badgr-badge-name">CRUD</p>
          </div>
          <div className="badge">
            <a href="https://api.badgr.io/public/assertions/9_S_FGF8TwCzpMqxw0S_Hw"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/UKO8--95RL2VhjDjvmHEuw/image?type=png" /></a><p class="badgr-badge-name">Solution</p>
          </div>
          <div className="badge">
            <a href="https://api.badgr.io/public/assertions/KhR77a7FTFyiDFgbVfDvqg"><img alt='badge' width="40px" height="40px" src="https://api.badgr.io/public/badges/pu0x3JnwQB2sj4nhkYQp8g/image?type=png" /></a><p class="badgr-badge-name">Customer</p>
          </div>

          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    </div>
  );
}
