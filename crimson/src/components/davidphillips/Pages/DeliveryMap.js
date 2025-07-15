
import { CardButton, Dot, Section, VL } from "../components/Elements"
import { BulletPoint, FP, H1, H2, H3, H4, H5, P1, P2, P3 } from "../components/TextStyles"

import { DMFrame } from "../components/DeliveryMapFrame"
import { Cascade, Cell, ExpandableRow, Row, Table } from "../components/Table"
import { prefixTable, zoneColours } from "../components/deliverymap"
import { useModeContext } from "../context/brandLayers"
import { useState } from "react"
import { DescreatCard } from "../components/card"

export const DeliveryMapPage = ({children,layer='One',docked={left:false, right:false, top:false, bottom: false},content_direction='tb',className='',...props})=> {
document.title = 'Delivery Map'
const {Mode}=useModeContext()
const SortTable=(a,b)=>{
    let output = a.id-b.id
    if(a.id=='na')output=-1
    if(b.id=='na')output=+1
    return output

}
const [message,setMessage]=useState('fill out info below to get date info.')
return(
    <Section fill layer="Two" left right top AICenter far>
        <Section className='main'>
            <H1>Delivery Guide</H1>
            <P1>Breakdown or delviery zones across the UK.</P1>
            <P1>{message}</P1>
        </Section>
        <DMFrame setMessage={setMessage}/>
        <Table className='main' style={{width:'100%',gap:'--var(--Gap)'}}>
            <Row>
                <Cell flex='0.5'><H5>Zone</H5></Cell>
                <Cell><H5>Fullfilled From</H5></Cell>

                <Row flex='5' style={{margin:0}}>
                <Cell><H5>Monday</H5></Cell>
                <Cell><H5>Tuesday</H5></Cell>
                <Cell><H5>Wednesday</H5></Cell>
                <Cell><H5>Thursday</H5></Cell>
                <Cell><H5>Friday</H5></Cell>
                </Row>
            </Row>
            {prefixTable.zones.array.sort(function(a,b){
                                            let output = a.id-b.id
                                            if(a.id=='na')output=+1
                                            if(b.id=='na')output=-1
                                            return output
                                        }).map((zone)=>{
                let isTrue =(d)=>prefixTable.zones.obj[zone.id].prefixList[0].week[d]
                let setColour =(d)=>isTrue(d)?{background: Mode.SegmentLayers.BTR.Four.Background}:{background: Mode.SegmentLayers.INT.Three.Background}
                let setCopy =(d)=>isTrue(d)?'True':'False'
                let getJoin=(p,n)=>isTrue(n)?isTrue(p)?'lr':'r':isTrue(p)?'l':''
                return(<ExpandableRow rowContent={zone.id!=='na'?
                    <Row>
                        <Cell style={{background: zoneColours[zone.id]}} flex='0.5'><H5>{zone.id}</H5></Cell>
                        <Cell ><H5>{prefixTable.zones.obj[zone.id].prefixList[0].fc}</H5></Cell>
                        <DescreatCard horizontal style={{flex:5,background: Mode.SegmentLayers.INT.Three.Background,margin:0}}>
                            <Cell style={setColour('Mo')} join={isTrue('Tu')?'r':''}>{setCopy('Mo')}</Cell>
                            <Cell style={setColour('Tu')} join={getJoin('Mo','We')}>{setCopy('Tu')}</Cell>
                            <Cell style={setColour('We')} join={getJoin('Tu','Th')}>{setCopy('We')}</Cell>
                            <Cell style={setColour('Th')} join={getJoin('We','Fr')}>{setCopy('Th')}</Cell>
                            <Cell style={setColour('Fr')} join={isTrue('Th')?'l':''}>{setCopy('Fr')}</Cell>
                        </DescreatCard>
                    </Row>
                    :<Row>
                        <Cell>Regions we do not currently deliver to.</Cell>
                    </Row>
                    }>
                    <Cascade>
                    {prefixTable.zones.obj[zone.id].prefixList.map(prefix=>{
                        return(<Row width={{min:'300px',max:'400px'}} layer='Two'>
                            <Cell flex={1.5} space>
                            {prefix.code}

                            </Cell>
                            {prefix.zone=='na'?
                            <Cell flex={5} align='left' style={{background:prefix.ND?Mode.SegmentLayers.BTR.Four.Background:Mode.SegmentLayers.INT.Three.Background}}>
                            We do not currently deliver to this Region
                            </Cell>
                            :
                            <Cell flex={5} align='left' style={{background:prefix.ND?Mode.SegmentLayers.BTR.Four.Background:Mode.SegmentLayers.INT.Three.Background}}>
                                Next day delivery: {prefix.ND?'£'+prefix.ND:'unavalable'}
                            </Cell>}
                        </Row>
                        )
                    })}</Cascade>

                </ExpandableRow>)
            })}
        </Table>
    </Section>

    )
}